import db from '../models'
import bcrypt from 'bcryptjs'
import {v4} from 'uuid'
import chothuecanho from '../data/chothuecanho.json'
import chothuematbang from '../data/chothuematbang.json'
import nhachothue from '../data/nhachothue.json'
import chothuephongtro from '../data/chothuephongtro.json'
import generateCode from '../utils/generateCode';
require('dotenv').config()
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
// Hàm chuyển đổi ngày từ JSON sang định dạng MySQL DATETIME
const convertDate = (dateStr) => {
    return dayjs(dateStr, "dddd, HH:mm DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss") || null;
};

const dataBody = chothuephongtro.body
//hàm băm mật khẩu
const hashPassword= password => bcrypt.hashSync(password,bcrypt.genSaltSync(12))

export const insertService = () => new Promise(async (resolve, reject) => {
    const transaction = await db.sequelize.transaction();
    try {
        // Dùng for...of thay vì forEach để hỗ trợ await
        for (const item of dataBody) {
            try {
                const postId = v4();
                const attributesId = v4();
                const overviewId = v4();
                const imagesId = v4();
                const userId = v4();
                const labelCode = generateCode(4);

                // 1. Tạo User trước
                await db.User.create({
                    id: userId,
                    name: item?.contact?.content?.find(i => i.name === "Liên hệ:")?.content || 'Unknown',
                    password: hashPassword('123456'),
                    phone: item?.contact?.content?.find(i => i.name === "Điện thoại:")?.content || null,
                    zalo: item?.contact?.content?.find(i => i.name === "Zalo")?.content || null,
                }, { transaction });

                // 2. Tạo Label
                await db.Label.create({
                    code: labelCode,
                    value: item?.header?.class?.classType || 'Unknown'
                }, { transaction });

                // 3. Tạo Attribute
                await db.Attribute.create({
                    id: attributesId,
                    price: item?.header?.attributes?.price || null,
                    acreage: item?.header?.attributes?.acreage || null,
                    published: item?.header?.attributes?.published || null,
                    hashtag: item?.header?.attributes?.hashtag || null
                }, { transaction });

                //console.log("Overview Data:", item?.overview?.content);
                // 4. Tạo Overview
                await db.Overview.create({
                    id: overviewId,
                    code: item?.overview?.content?.find(i => i.name === "Mã tin:")?.content || null,
                    area: item?.overview?.content?.find(i => i.name === "Khu vực")?.content || null,
                    type: item?.overview?.content?.find(i => i.name === "Loại tin rao:")?.content || null,
                    target: item?.overview?.content?.find(i => i.name === "Đối tượng thuê:")?.content || null,
                    bonus: item?.overview?.content?.find(i => i.name === "Gói tin:")?.content || null,
                    created: convertDate(item?.overview?.content?.find(i => i.name === "Ngày đăng:")?.content),
                    expired: convertDate(item?.overview?.content?.find(i => i.name === "Ngày hết hạn:")?.content),
                }, { transaction });

                //console.log("image Data:", JSON.stringify(item?.images));
                // 5. Tạo Image
                await db.Image.create({
                    id: imagesId,
                    image: JSON.stringify(item?.images || [])
                }, { transaction });

                // 6. Cuối cùng tạo Post
                await db.Post.create({
                    id: postId,
                    title: item?.header?.title || 'No title',
                    star: item?.header?.star || null,
                    labelCode,
                    address: item?.header?.address || 'No address',
                    attributesId,
                    categoryCode: 'CTPT',
                    description: JSON.stringify(item?.mainContent?.content || []),
                    userId,
                    overviewId,
                    imagesId
                }, { transaction });

                console.log(`Inserted post: ${item?.header?.title}`);
            } catch (err) {
                console.error(`Error inserting item: ${err.message}`);
                // Tiếp tục với item tiếp theo thay vì dừng
                continue;
            }
        }

        await transaction.commit();
        resolve("DONE - All data inserted successfully");
    } catch (error) {
        await transaction.rollback();
        console.error("Transaction failed:", error);
        reject(error);
    }
}); 
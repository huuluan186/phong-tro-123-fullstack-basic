import React, { useEffect, useState } from 'react' // Import các hook cần dùng
import { PageNumber } from '../../components' // Import component PageNumber
import { useSelector } from 'react-redux' // Lấy dữ liệu từ Redux store
import icons from '../../utils/icon' // Import icon

const { GrFormNextLink,GrFormPreviousLink } = icons // Lấy icon điều hướng

const Pagination = ({ number }) => {
    // Lấy dữ liệu số lượng bài viết và danh sách bài viết từ Redux store
    const { count, posts } = useSelector(state => state.post)

    // State để lưu danh sách các trang hiển thị
    const [arrPage, setArrPage] = useState([])

    // State để lưu trang hiện tại, khởi tạo với `number`
    const [currentPage, setCurrentPage] = useState(+number)

    const [isHideNext, setIsHideNext] = useState(false) // Biến để kiểm tra xem có ẩn nút "tiếp theo" hay không
    const [isHidePrev, setIsHidePrev] = useState(false) // Biến để kiểm tra xem có ẩn nút "trước đó" hay không

    // 🛠️ Xử lý tạo danh sách số trang hiển thị
    useEffect(() => {
        // Tính số trang tối đa dựa trên tổng bài viết
        let maxPage = Math.floor(count / posts.length)

        // Xác định khoảng trang hiển thị (tránh hiển thị quá nhiều số trang)
        let next = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
        let prev = (currentPage - 2) <= 1 ? 1 : (currentPage - 2)

        // Tạo danh sách các số trang hiển thị
        let temp = []
        for (let i = prev; i <= next; i++) {
            temp.push(i)
        }
        setArrPage(temp) // Cập nhật state danh sách trang

        currentPage >= (maxPage - 2) ? setIsHideNext(true) : setIsHideNext(false)
        currentPage <= 3 ? setIsHidePrev(true) : setIsHidePrev(false)
        // 1 => (1 2 3 ... ->)
        //4 => (... 2 3 4)
        console.log('setIsHideNext: ', isHideNext)
    }, [count, posts, currentPage]) // Chạy lại khi số bài viết hoặc trang hiện tại thay đổi

    return (
        <div className='flex items-center justify-center gap-2 py-5'>
            {/* Nút chuyển trang trước đó */}
             {!isHidePrev && <PageNumber icon={<GrFormPreviousLink />} text={1} setCurrentPage={setCurrentPage}/>}
             {!isHidePrev &&  <PageNumber text={'...'} />}
            {/* Hiển thị danh sách số trang */}
            {arrPage?.length > 0 && arrPage.map((item) => {
                return (
                    <PageNumber key={item} text={item}
                        currentPage={currentPage} setCurrentPage={setCurrentPage} />
                )
            })}
            {/* Hiển thị dấu "..." để biểu thị có thêm nhiều trang khác */}
            {!isHideNext &&  <PageNumber text={'...'} />}

            {/* Nút chuyển trang tiếp theo */}
           {!isHideNext && <PageNumber icon={<GrFormNextLink />} text={Math.floor(count / posts.length)} setCurrentPage={setCurrentPage}/>}
        </div>
    )
}

export default Pagination

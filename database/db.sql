CREATE DATABASE if not exists QuanLyPhim;

1. phim
- id int
- mã phim varchar
- thời lượng time
- năm int
- diễn viên varchar
- tuổi int
- đạo diễn varchar
- quốc gia (Id) int
- thể loại (Id) int
- đường dẫn trailer varchar
- poster varchar
- mô tả text
- ảnh varchar
- nội dung varchar
2. ng dùng
- id int
- tên đăng nhập varchar
- mật khẩu varchar
- loại tài khoản (admin, ngdung, đạo diễn, diễn viên) int 
- tuổi int
- sdt varchar
- email varchar
3. thể loại
- id int
- tên thể loại varchar
4. quốc gia
- id int
- ten quoc gia varchar
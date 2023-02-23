
# Link view online product

[https://leha2505.github.io/LTCT_Delivery_FE/](https://leha2505.github.io/LTCT_Delivery_FE/delivery-fee-caculate)

# For running the application locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use ng help or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Hướng dẫn sử dụng 

## Màn Trang chủ

* Xem số lượng đơn hàng theo trạng thái, tỷ lệ thành công/không thành công
* Xem nhanh số lượng đơn hàng đổi trả -> bấm vào button eye để xem cụ thể
* Biểu đồ tiếp nhận đơn vận chuyển theo 7 ngày gần nhất

## Màn quản lý đơn vận chuyển

* Xem danh sách đơn hàng vận chuyển
* Hỗ trợ tìm kiếm theo mã đơn hàng(không phân biệt chữ hoa, chữ thường), trạng thái đơn hàng
* Hỗ trợ chuyển trạng thái 1 đơn hàng trên bảng bằng button swap, các trạng thái tiếp theo phụ thuộc vào trạng thái hiện tại, hỗ trợ cập nhật ghi chú(trường không băt buộc)
* Hỗ trợ chọn nhiều đơn hàng để chuyển trạng thái hàng loạt, yêu cầu các đơn hàng được chọn phải cùng trạng thái, hỗ trợ cập nhật ghi chú(trường không băt buộc)
* Hỗ trợ chọn tất cả bản ghi hiển thị bằng checkbox trên hàng đầu bảng, phục vụ cho chức năng chuyển trạng thái hàng loạt
* Chọn button eye để xem thông tin cụ thể

## Màn xem chi tiết đơn vận chuyển

* Hiển thị đầy đủ thông tin của đơn hàng bao gồm thông tin chung, thông tin phí vận chuyển, thông tin người nhận, thông tin hàng gửi hoặc hàng trả lại
* Hỗ trợ chuyển trạng thái đơn hàng bằng button 'Chuyển trạng thái', hỗ trợ cập nhật ghi chú(trường không băt buộc)
* Hỗ trợ quay về màn danh sách bằng button 'Trở lại' hoặc breadcrumb

## Màn tính phí ship

* Hỗ trợ tính phí ship dựa vào điểm gửi và điểm nhận, phí thu hộ
* Hỗ trợ lựa chọn tỉnh/huyện/xã chính xác, cho phép tìm kiếm tỉnh/huyện/xã
* Bấm vào button "Tra cứu" để hiển thị kết quả là chi tiết phí vận chuyển gồm tổng, phí dịch vụ chuyển phát thương mại điện tử, phí khai giá hàng hóa, phí gửi hàng tại bưu cục
* Yêu cầu nhập đủ các trường

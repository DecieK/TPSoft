<div class="modal-content">
    <div class="modal-header">
        <div class="modal-header-datlich">
            <input type="hidden" id="msdv" value="15012008193570">
                <input type="hidden" id="datlich_loai" value="1">
                    <input type="hidden" id="diachi_dv" value="14/14 LÝ TỰ TRỌNG, TP.CẦN THƠ">
                        <input type="hidden" id="map_dv" value="undefined">
                            <h5 class="modal-title-book" id="pk_name">PHÒNG KHÁM CHUYÊN KHOA DA LIỄU FOB ®</h5>
                            <h5 class="modal-title-sub" id="pk_name_bs">PGS.TS.BS HUỲNH VĂN BÁ</h5>
                            <h5 id="thongbao_nghi"></h5>
                        </div>

                        <button type="button" onclick="DatLich_Refresh_form()" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form_datlich_top">
                            <div class="datlich_top_item form-group">
                                <div class="row">
                                    <div class="col-sm-3 col-12">
                                        <p class="datlich_text_desktop">Điện thoại</p>
                                    </div>
                                    <div class="col-sm-9 col-12">
                                        <input onchange="load_benhnhan_theosdt()" onkeyup="this.value = this.value.replace(/[^0-9\.\,]/g,'')" type="text" name="dienthoai" id="dienthoai" class="form-control" placeholder="Nhập chính xác số điện thoại" required="">
                                            <ul class="benhnhan_list" style="margin: 0px;">

                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="datlich_top_item form-group">
                                <div class="row">
                                    <div class="col-sm-3 col-12">
                                        <p class="datlich_text_desktop">Họ tên</p>
                                    </div>
                                    <div class="col-sm-9 col-12">
                                        <input type="hidden" id="msbn" value="WEB">
                                            <input type="hidden" id="nguon" value="WEB">
                                                <input type="text" name="hoten" id="hoten" class="form-control" placeholder="Nhập chính xác họ tên" required="">
                                                </div>

                                            </div>
                                    </div>
                                    <div class="datlich_top_item form-group">
                                        <div class="row">
                                            <div class="col-sm-3 col-12">
                                                <p class="datlich_text_desktop">Ngày sinh</p>
                                            </div>
                                            <div class="col-sm-9 col-12">
                                                <input id="ngaysinh" class="form-control ngaysinh_edit txt_date" data-date-format="dd-mm-yy" type="text" placeholder="dd/mm/yyyy" data-inputmask-alias="datetime" data-inputmask-inputformat="dd-mm-yyyy" data-mask="" im-insert="false">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="datlich_top_item form-group">
                                        <div class="row">
                                            <div class="col-sm-3 col-12">
                                                <p class="datlich_text_desktop">Giới tính</p>
                                            </div>
                                            <div class="col-sm-9 col-12">
                                                <div class="gioitinh_edit_form">
                                                    <input type="radio" name="gioitinh" value="Nam">Nam
                                                        <input style="margin-left: 35px" type="radio" name="gioitinh" value="Nữ">Nữ
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="datlich_top_item form-group">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    <p class="datlich_text_desktop">Địa chỉ</p>
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <input type="text" id="diachi" class="form-control" required="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="datlich_top_item form-group">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    <p class="datlich_text_desktop">Triệu chứng</p>
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <input type="text" name="trieuchung" id="trieuchung" class="form-control" required="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="form_datlich_bottom" class="form_datlich_bottom">
                                        <div class="datlich_top_item form-group">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    <p class="datlich_text_desktop">Ngày khám</p>
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <input onchange="KhungGio();kiemtra_nghikham()" id="datepicker" class="form-control time_datlich" data-date-format="dd/mm/yyyy" readonly="" type="text" style="background-color:white"> <span class="input-group-addon"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="datlich_top_item form-group">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    <div id="canhbao_chonkhunggio"><p class="red">Vui lòng chọn buổi</p></div>

                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="khunggio">
                                                        <script>
                                                            Get_Data_DatLich_ToHidden()
                                                            Click_Datlich_Thoigian_Focus()
                                                        </script></div>
                                                    <input type="hidden" id="buoi_choose" value="">
                                                        <input type="hidden" id="tugio_choose" value="">
                                                            <input type="hidden" id="dengio_choose" value="">
                                                            </div>

                                                        </div>
                                                </div>
                                            </div>

                                            <div class="Btn_DatLich_Wrap hidden control-group" id="Btn_DatLich_Wrap">
                                                <div class="controls" style="display: flex;justify-content: space-between; align-items: center; ">
                                                    <div id="error_datlich" style="margin:10px 0"></div>
                                                    <button onclick="AddDoctor()" type="button" name="Btn_DatLich" id="Btn_DatLich" class="btn btn-primary">Đặt lịch</button>
                                                </div>
                                                <ul id="list_dadatlich">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

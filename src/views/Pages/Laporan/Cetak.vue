<template >
    <div class="preview-a4">
        	<div class="text-center my-3">
				<table width="100%" class="m-0">
					<tr>
						<td class="logo-header">
							<img src="@/assets/logo_psdkp_old.png" width="130" class="ml-1">
						</td>
						<td>
							<table class="text-center">
								<tr>
									<td colspan="4" height="50px">
										<div class="bold title">
											<h2 style="color: black; font-size: 22px; font-weight: bold;">KEMENTERIAN KELAUTAN DAN PERIKANAN</h2>
											<h2 style="color: black; font-size: 19px; font-weight: bold;">DIREKTORAT JENDERAL PENGAWASAN</h2>
											<h2 style="color: black; font-size: 19px; font-weight: bold;">SUMBER DAYA KELAUTAN DAN PERIKANAN</h2>
										
										</div>				
										<div style="margin-top: 3px;">
											<p class="text-center" style="font-size: 12px;">JL. Medan Merdeka Timur No.16 Gedung Mina Bahari IV Lantai 11 Jakarta 10110<br>
											Kotak Pos 4130 JKP 10041 Telepon (021) 3514728 (Hunting) Faksimile: (021) 3515484<br>
											Website: <i><a href="#">www.djpsdkp.kkp.go.id</a></i>, E-mail: ditjenpsdkp@kkp.go.id<i><a></a></i>
											</p>
										</div>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan="2">
                       <hr class="s1">
                        </td>
					</tr>
                    
				</table>
           </div>
	</div>
</template>

<script>
export default {
    name: "Cetak"
}
</script>

<style>
.preview-a4 {
	width: 725px;
	height: 25.5cm;
	margin: auto;
    margin-bottom: 30%;
	background-color: white;
}
.wrapper {
	font-family: Arial, sans-serif;
	font-size: 11px ;
}
.wrapper-rill {
	padding : 15px;
	font-family: Arial, sans-serif;
	font-size: 14px ;	
}
h1,h2,h3,h4,h5,h6,p {
	margin: 0px;
}
ol > li {
	text-align: justify;
}
p {
	text-align: justify;	
	line-height: 15px;
}
.title {
	text-align: center;
}
.title-date {
	line-height: 10px;
}
.text-center {
  text-align: center !important;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify!important;
}
.text-underline {
  text-decoration: underline !important;
}
.text-uppercase {
  text-transform: uppercase;
}
.m-0 {
	margin: 0 !important;
}
.m-1 {
	margin: 10px !important;
}
.p-0 {
	padding: 0 !important;
}
.p-01 {
	padding: 1px !important;
}
.p-02 {
	padding: 2px !important;
}
.m-2{
	margin: 10px;
}
.p-2 {
	padding: 20px;
}
.p-1 {
	padding: 10px;
}
.pl-1 {
	padding-left: 10px !important;
}
.pl-2 {
	padding-left: 22px !important;
}
.px-1 {
	padding: 0 10px;
}
.mx-10 {
	margin: 0 100px;
}
.mb-3,
.my-3 {
  margin-bottom: 30px !important;
}
.mt-3,
.my-3 {
  margin-top: 30px !important;
}
.mb-1,
.my-1 {
  margin-bottom: 10px !important;
}
.mt-1,
.my-1 {
  margin-top: 10px !important;
}
.ml-1 {
	margin-left: 10px;
}
.ml-0 {
	margin: 0;
}
.logo {
	position: relative;
	top: 0;
	left: 0;
}
.table-padding {
  width: 100%;
  margin: 10px 0;
}
.table-padding td {
  padding: 8px;
  vertical-align: top;
}
.table-padding td > ol > li, ul > li{
  padding: 3px;
}
.table {
  width: 100%;	
}
.table td {
  padding: 1px;
  vertical-align: top;
}
.table th {
	text-align: center;
}
.align-bottom {
	vertical-align: bottom !important;
}
.align-top {
	vertical-align: top;
}
.align-middle {
	vertical-align: middle !important;
}
.line-height-0 {
	line-height: 0px;
}
.ttd {
	height: 40px;
}
.border{
  border : 1px solid black;
}
/*
.border-double{
  border : 1px solid black;
}*/
.border-bottom-dotted{
  border-bottom : 1px dotted black;
}
.border-bottom-double{
  border-bottom : 3px double black;
}
.border-y-gradasi {
	border-top: 2px solid black;
	border-bottom: 1px solid grey;
}
.border-bottom{
  border-bottom : 1px solid black;
}
.border-top{
  border-top : 1px solid black;
}
.border-left{
  border-left : 1px solid black;
}
.border-right{
  border-right : 1px solid black;
}
.bold {
  font-weight: bold !important;
}
.float-right {
	float: right;
}
.bg-white-grey {
	background-color: #eee;
}
.bg-grey {
	background-color: #bbb;
}
.logo-header{
    width: 180px;
}
hr {
  background-color:white;
  margin:0 0 45px 0;
  max-width:auto;
  border-width:0;
}
hr.s1 {
  height:5px;
  border-top:1px solid black;
  border-bottom:2px solid black;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
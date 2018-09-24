<template>
    <div>
	<a class="btn" @click="toggleShow">上传图片</a>
	<my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
		:width="300"
		:height="300"
		:url="uploadUrl"
		:params="params"
		:headers="headers"
		img-format="png" :noRotate="false" :max-size="10240"></my-upload>
	<img :src="imgDataUrl">
</div>
</template>
<script>
import 'babel-polyfill'; // es6 shim
import Vue from 'vue';
import myUpload from 'vue-image-crop-upload';

export default {
    data(){
        return {
			show: false,
			params: {
				token: '123456798',
				name: '上传图片'
			},
			headers: {
				smail: '*_~'
			},
            imgDataUrl: '', // the datebase64 url of created image
            uploadUrl:'/upload'
            
		}
    } ,
		components: {
			'my-upload': myUpload
		},
		methods: {
			toggleShow() {
				this.show = !this.show;
			},
            /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.imgDataUrl = imgDataUrl;
			},
			/**
			 * upload success
			 *
			 * [param] jsonData  server api return data, already json encode
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
		}
}

</script>


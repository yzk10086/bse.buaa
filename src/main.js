import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import $ from 'jquery';
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Content-Type", 'text/html');
//   console.log("TRIGGERED");
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = '/Users/yzk/Documents/graduation_project/front.nosync/data/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(9090);




Vue.use(ElementUI);
window.jQuery = $;
window.$ = $;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

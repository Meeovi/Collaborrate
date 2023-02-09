// feathers client initialization
const rest = feathers.rest('http://localhost:3030');
const app = feathers()
.configure(feathers.hooks())
.configure(rest.jquery($));

// setup jQuery to watch the ajax progress
$.ajaxSetup({
    xhr: function () {
        var xhr = new window.XMLHttpRequest();
        // upload progress
        xhr.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                console.log('upload progress: ', Math.round(percentComplete * 100) + "%");
            }
        }, false);
        return xhr;
    }
});

const uploadService = app.service('uploads');
const reader  = new FileReader();

// upload on file selection
$(document).ready(function(){
    $('input#file').change(function(){
        var file = this.files[0];
        reader.readAsDataURL(file); // encode file
    })
});

// when encoded, upload
reader.addEventListener("load", function () {
    console.log('encoded file: ', reader.result);
    var upload = uploadService
        .create({uri: reader.result})
        .then(function(response){
            alert('UPLOADED!! ');
            console.log('Server responded with: ', response);
        });
}, false);
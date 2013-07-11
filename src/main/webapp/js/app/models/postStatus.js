(function(Backbone, Tatami){

    var PostStatus = Backbone.Model.extend({
        defaults: {
            content: '',
            groupId: '',
            attachmentIds: [],
            replyTo: '',
            geoLocalization:'' ,
            statusPrivate: false
        },

        urlRoot: '/tatami/rest/statuses/',

        addAttachment: function(id){
            var attachments = this.get('attachmentIds');
            attachments.push(id);
            this.set('attachmentIds', attachments);
        },

        resetAttachments: function() {
            this.set('attachmentIds', []);
        },

        geoLocate: function() {
            self = this;
            if (navigator.geolocation)   {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geoLocalization = position.coords.latitude +', ' + position.coords.longitude;
                    self.set('geoLocalization', geoLocalization);
                });
            }
        }


    });

    Tatami.Models.PostStatus = PostStatus;

})(Backbone, Tatami);
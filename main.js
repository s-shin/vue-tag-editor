(function() {

  var TagEditor = Vue.extend({
    data: {
      newTagName: "",
      tags: null,
      maxTagNum: 5,
    },
    created: function() {
      this.tags = this.tags || [];
    },
    methods: {
      addTag: function(tagName) {
        name = tagName.trim();
        if (name === "") return false;
        if (this.tags.indexOf(tagName) >= 0) return false;
        if (this.maxTagNum > 0 && this.tags.length >= this.maxTagNum) return false;
        this.tags.push(name);
        return true;
      },
      addInputTag: function() {
        if (this.addTag(this.newTagName)) {
          this.newTagName = "";
        }
      },
      removeTag: function(tagName) {
        this.tags.$remove(tagName);
      }
    }
  });

  var FocusableTagEditor = TagEditor.extend({
    data: {
      focusTarget: "input[type=text]"
    },
    methods: {
      focusInput: function() {
        this.$el.querySelector(this.focusTarget).focus();
      }
    }
  });

  new FocusableTagEditor({
    el: "#js-tag-editor-1",
    data: {
      tags: ["foo", "bar"]
    }
  });

  new FocusableTagEditor({
    el: "#js-tag-editor-2",
    data: {
      maxTagNum: -1
    }
  });

})();

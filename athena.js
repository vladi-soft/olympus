/**
 * @fileoverview Asynchronous Client Side MVC Framework
 * @author vladimir.darmin@gmail.com
 */

var mvc = { }; /** wrapper around the framework */

(function ($) {
   /** @const Style resource, loaded once      */ var STYLE = 0;
   /** @const Executable resource, loaded once */ var SCRIPT = 1;
   /** @const Data resource, loaded every time */ var DATA = 2;

   // Web page resource manager
   var manager = {
      
      // Information about every requested resource: { name, type, status, content }
      var resources = { }

      /**
       * @desc Load style resource
       * @param {string} style resource name
       * @param {function(error, content)}
       */
      var loadStyle = function (name, callback) {
      }

      /**
       * @desc Load script resource
       * @param {string} script resource name
       * @param {function(error, content)}
       */
      var loadScript = function (name, callback) {
      }

      /**
       * @desc Load data resource
       * @param {string} data resource name
       * @param {function(error, content)}
       */
      var loadData = function (name, callback) {
      }

      /**
       * @desc Load resource
       * @param {string} resource name
       * @param {function(error, content)}
       */
      var load = function (name, callback) {
         // match name extention with the appropriate type and load method
      }

      /**
       * @desc Find the first valid name for an existing resource
       * @param {string} relative resource name
       * @param {array<string>} list of possible prefixes for the name
       * @param {function(error, name)}
       */
      var getValidName = function (name, prefixes, callback) {
         // get heads to determin which name to use
      }

      /**
       * @desc Load requested resource
       * @param {string} relative resource name
       * @param {array<string>} list of possible prefixes for the name
       * @param {function(error, content)}
       */
      this.load = function (name, prefixes, callback) {
         // load appropriate content based on the valid resource name
      }
   } // manager
}) (mvc);

System.register(['react'], (function (exports) {
  var React;

  return {
    setters: [function (module) {
      // var f=require("react"),
      React = module;
    }],
    execute: (function () {
      // g=60103;
      var REACT_ELEMENT_TYPE = 0xeac7;
      // exports.Fragment=60107;
      var Fragment = 0xeacb;

      // if("function"===typeof Symbol&&Symbol.for){
      //   var h=Symbol.for;
      //   g=h("react.element");
      //   exports.Fragment=h("react.fragment")
      // }
      if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        Fragment = symbolFor('react.fragment');
      }
      
      // var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      var ReactCurrentOwner = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      // n=Object.prototype.hasOwnProperty
      var hasOwnProperty = Object.prototype.hasOwnProperty; // Object.prototype.hasOwnProperty;
      // p={key:!0,ref:!0,__self:!0,__source:!0};
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };

      // function q(c,a,k){
      // function jsxDEV(type, config, maybeKey, source, self) {
      function jsx(type, config, maybeKey) {
        // var b,
        var propName; // Reserved names are extracted
        // d={},
        var props = {};
        // e=null,
        var key = null;
        // l=null;
        var ref = null;

        // void 0!==k&&(e=""+k);
        if (maybeKey !== undefined) {
          key = '' + maybeKey;
        }
        // void 0!==a.key&&(e=""+a.key);
        // if (hasValidKey(config)) {
        //   key = '' + config.key;
        // }
        if (config.key !== undefined) {
          key = '' + config.key;
        }
        // void 0!==a.ref&&(l=a.ref);
        // if (hasValidRef(config)) {
        //   ref = config.ref;
        // } // Remaining properties are added to a new props object
        if (config.ref !== undefined) {
          ref = config.ref;
        }

        // for(b in a) n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props
        
        // if(c&&c.defaultProps)
        //   for(b in a=c.defaultProps,a)
        //     void 0===d[b]&&(d[b]=a[b]);
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
    
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        // return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}
        // return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        return {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: ReactCurrentOwner.current,
        }
      }

      exports({
        Fragment,
        jsx: jsx, 
        jsxs: jsx,
      });
    })
  }
}));
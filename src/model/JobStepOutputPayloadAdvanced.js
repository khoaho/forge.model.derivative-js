/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeModelDerivative) {
      root.ForgeModelDerivative = {};
    }
    root.ForgeModelDerivative.JobStepOutputPayloadAdvanced = factory(root.ForgeModelDerivative.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobStepOutputPayloadAdvanced model module.
   * @module model/JobStepOutputPayloadAdvanced
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>JobStepOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;step&#x60; type.
   * @alias module:model/JobStepOutputPayloadAdvanced
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>JobStepOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStepOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobStepOutputPayloadAdvanced} The populated <code>JobStepOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationProtocol')) {
        obj['applicationProtocol'] = ApiClient.convertToType(data['applicationProtocol'], 'String');
      }
      if (data.hasOwnProperty('tolerance')) {
        obj['tolerance'] = ApiClient.convertToType(data['tolerance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A STEP file can be generated with the following Application Protocols: `203` for configuration controlled design, `214` for core data for automotive mechanical design processes, `242` for managed model based 3D engineering. By default, `214` will be exported. 
   * @member {module:model/JobStepOutputPayloadAdvanced.ApplicationProtocolEnum} applicationProtocol
   * @default '214'
   */
  exports.prototype['applicationProtocol'] = '214';
  /**
   * Possible values are between `0` and `1`. By default it is set at 0.001.
   * @member {Number} tolerance
   * @default 0.001
   */
  exports.prototype['tolerance'] = 0.001;


  /**
   * Allowed values for the <code>applicationProtocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationProtocolEnum = {
    /**
     * value: "203"
     * @const
     */
    "203": "203",
    /**
     * value: "214"
     * @const
     */
    "214": "214",
    /**
     * value: "242"
     * @const
     */
    "242": "242"  };


  return exports;
}));


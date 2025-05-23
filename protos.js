/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal.js"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal.js"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    export const Protos = $root.Protos = (() => {
    
        /**
         * Namespace Protos.
         * @exports Protos
         * @namespace
         */
        const Protos = {};
    
        Protos.Address = (function() {
    
            /**
             * Properties of an Address.
             * @memberof Protos
             * @interface IAddress
             * @property {string|null|undefined} [type] Address type
             * @property {string|null|undefined} [address_1] Address address_1
             * @property {string|null|undefined} [address_2] Address address_2
             */
    
            /**
             * Constructs a new Address.
             * @memberof Protos
             * @classdesc Represents an Address.
             * @implements IAddress
             * @constructor
             * @param {Protos.IAddress=} [properties] Properties to set
             */
            function Address(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Address type.
             * @member {string|null} type
             * @memberof Protos.Address
             * @instance
             */
            Address.prototype.type = null;
    
            /**
             * Address address_1.
             * @member {string|null} address_1
             * @memberof Protos.Address
             * @instance
             */
            Address.prototype.address_1 = null;
    
            /**
             * Address address_2.
             * @member {string|null} address_2
             * @memberof Protos.Address
             * @instance
             */
            Address.prototype.address_2 = null;
    
            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;
    
            /**
             * Address _address_2.
             * @member {"address_2"|undefined} _address_2
             * @memberof Protos.Address
             * @instance
             */
            Object.defineProperty(Address.prototype, "_address_2", {
                get: $util.oneOfGetter($oneOfFields = ["address_2"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Address instance using the specified properties.
             * @function create
             * @memberof Protos.Address
             * @static
             * @param {Protos.IAddress=} [properties] Properties to set
             * @returns {Protos.Address} Address instance
             */
            Address.create = function create(properties) {
                return new Address(properties);
            };
    
            /**
             * Encodes the specified Address message. Does not implicitly {@link Protos.Address.verify|verify} messages.
             * @function encode
             * @memberof Protos.Address
             * @static
             * @param {Protos.Address} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                if (message.address_1 != null && Object.hasOwnProperty.call(message, "address_1"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.address_1);
                if (message.address_2 != null && Object.hasOwnProperty.call(message, "address_2"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.address_2);
                return writer;
            };
    
            /**
             * Encodes the specified Address message, length delimited. Does not implicitly {@link Protos.Address.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Protos.Address
             * @static
             * @param {Protos.Address} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Address message from the specified reader or buffer.
             * @function decode
             * @memberof Protos.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Protos.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protos.Address();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.string();
                            break;
                        }
                    case 2: {
                            message.address_1 = reader.string();
                            break;
                        }
                    case 3: {
                            message.address_2 = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Address message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Protos.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Protos.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Address message.
             * @function verify
             * @memberof Protos.Address
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Address.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.address_1 != null && message.hasOwnProperty("address_1"))
                    if (!$util.isString(message.address_1))
                        return "address_1: string expected";
                if (message.address_2 != null && message.hasOwnProperty("address_2")) {
                    properties._address_2 = 1;
                    if (!$util.isString(message.address_2))
                        return "address_2: string expected";
                }
                return null;
            };
    
            /**
             * Creates an Address message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Protos.Address
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Protos.Address} Address
             */
            Address.fromObject = function fromObject(object) {
                if (object instanceof $root.Protos.Address)
                    return object;
                let message = new $root.Protos.Address();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.address_1 != null)
                    message.address_1 = String(object.address_1);
                if (object.address_2 != null)
                    message.address_2 = String(object.address_2);
                return message;
            };
    
            /**
             * Creates a plain object from an Address message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Protos.Address
             * @static
             * @param {Protos.Address} message Address
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Address.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type = "";
                    object.address_1 = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.address_1 != null && message.hasOwnProperty("address_1"))
                    object.address_1 = message.address_1;
                if (message.address_2 != null && message.hasOwnProperty("address_2")) {
                    object.address_2 = message.address_2;
                    if (options.oneofs)
                        object._address_2 = "address_2";
                }
                return object;
            };
    
            /**
             * Converts this Address to JSON.
             * @function toJSON
             * @memberof Protos.Address
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Address.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Address
             * @function getTypeUrl
             * @memberof Protos.Address
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Address.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Protos.Address";
            };
    
            return Address;
        })();
    
        return Protos;
    })();

    return $root;
});

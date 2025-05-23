import * as $protobuf from "protobufjs";

/** Namespace Protos. */
export namespace Protos {

    /** Properties of an Address. */
    interface IAddress {

        /** Address type */
        type?: (string|undefined);

        /** Address address_1 */
        address_1?: (string|undefined);

        /** Address address_2 */
        address_2?: (string|null|undefined);
    }

    /** Represents an Address. */
    class Address implements IAddress {

        /**
         * Constructs a new Address.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protos.IAddress);

        /** Address type. */
        public type: string;

        /** Address address_1. */
        public address_1: string;

        /** Address address_2. */
        public address_2: (string|null);

        /**
         * Creates a new Address instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Address instance
         */
        public static create(properties?: Protos.IAddress): Protos.Address;

        /**
         * Encodes the specified Address message. Does not implicitly {@link Protos.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protos.Address, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link Protos.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protos.Address, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protos.Address;

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protos.Address;

        /**
         * Verifies an Address message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Address
         */
        public static fromObject(object: { [k: string]: any }): Protos.Address;

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @param message Address
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protos.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Address to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Address
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

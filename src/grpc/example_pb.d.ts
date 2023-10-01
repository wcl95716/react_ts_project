import * as jspb from 'google-protobuf'



export class DataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DataRequest): DataRequest.AsObject;
  static serializeBinaryToWriter(message: DataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRequest;
  static deserializeBinaryFromReader(message: DataRequest, reader: jspb.BinaryReader): DataRequest;
}

export namespace DataRequest {
  export type AsObject = {
  }
}

export class DataResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DataResponse): DataResponse.AsObject;
  static serializeBinaryToWriter(message: DataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataResponse;
  static deserializeBinaryFromReader(message: DataResponse, reader: jspb.BinaryReader): DataResponse;
}

export namespace DataResponse {
  export type AsObject = {
    message: string,
  }
}


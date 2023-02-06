"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Upload_fileScalarFieldEnum;
(function (Upload_fileScalarFieldEnum) {
    Upload_fileScalarFieldEnum["id"] = "id";
    Upload_fileScalarFieldEnum["name"] = "name";
    Upload_fileScalarFieldEnum["alternativeText"] = "alternativeText";
    Upload_fileScalarFieldEnum["caption"] = "caption";
    Upload_fileScalarFieldEnum["width"] = "width";
    Upload_fileScalarFieldEnum["height"] = "height";
    Upload_fileScalarFieldEnum["formats"] = "formats";
    Upload_fileScalarFieldEnum["hash"] = "hash";
    Upload_fileScalarFieldEnum["ext"] = "ext";
    Upload_fileScalarFieldEnum["mime"] = "mime";
    Upload_fileScalarFieldEnum["size"] = "size";
    Upload_fileScalarFieldEnum["url"] = "url";
    Upload_fileScalarFieldEnum["previewUrl"] = "previewUrl";
    Upload_fileScalarFieldEnum["provider"] = "provider";
    Upload_fileScalarFieldEnum["provider_metadata"] = "provider_metadata";
    Upload_fileScalarFieldEnum["created_by"] = "created_by";
    Upload_fileScalarFieldEnum["updated_by"] = "updated_by";
    Upload_fileScalarFieldEnum["created_at"] = "created_at";
    Upload_fileScalarFieldEnum["updated_at"] = "updated_at";
})(Upload_fileScalarFieldEnum = exports.Upload_fileScalarFieldEnum || (exports.Upload_fileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Upload_fileScalarFieldEnum, {
    name: "Upload_fileScalarFieldEnum",
    description: undefined,
});

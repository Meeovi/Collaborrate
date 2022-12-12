"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MediamanagerScalarFieldEnum;
(function (MediamanagerScalarFieldEnum) {
    MediamanagerScalarFieldEnum["id"] = "id";
    MediamanagerScalarFieldEnum["created_at"] = "created_at";
    MediamanagerScalarFieldEnum["name"] = "name";
    MediamanagerScalarFieldEnum["description"] = "description";
    MediamanagerScalarFieldEnum["media"] = "media";
    MediamanagerScalarFieldEnum["keywords"] = "keywords";
    MediamanagerScalarFieldEnum["tags"] = "tags";
    MediamanagerScalarFieldEnum["brands"] = "brands";
    MediamanagerScalarFieldEnum["status"] = "status";
    MediamanagerScalarFieldEnum["expiration_date"] = "expiration_date";
    MediamanagerScalarFieldEnum["copyright"] = "copyright";
    MediamanagerScalarFieldEnum["dimensions"] = "dimensions";
    MediamanagerScalarFieldEnum["author"] = "author";
    MediamanagerScalarFieldEnum["content_type"] = "content_type";
    MediamanagerScalarFieldEnum["versions"] = "versions";
    MediamanagerScalarFieldEnum["watermark_name"] = "watermark_name";
    MediamanagerScalarFieldEnum["watermark_description"] = "watermark_description";
    MediamanagerScalarFieldEnum["watermark_media"] = "watermark_media";
    MediamanagerScalarFieldEnum["agreements"] = "agreements";
    MediamanagerScalarFieldEnum["albums"] = "albums";
    MediamanagerScalarFieldEnum["comment"] = "comment";
    MediamanagerScalarFieldEnum["workspace"] = "workspace";
    MediamanagerScalarFieldEnum["task_name"] = "task_name";
    MediamanagerScalarFieldEnum["task_description"] = "task_description";
    MediamanagerScalarFieldEnum["task_type"] = "task_type";
    MediamanagerScalarFieldEnum["members"] = "members";
    MediamanagerScalarFieldEnum["products"] = "products";
    MediamanagerScalarFieldEnum["agreements_agreementsTomediamanager"] = "agreements_agreementsTomediamanager";
    MediamanagerScalarFieldEnum["brands_brandsTomediamanager"] = "brands_brandsTomediamanager";
    MediamanagerScalarFieldEnum["comments"] = "comments";
    MediamanagerScalarFieldEnum["customers"] = "customers";
    MediamanagerScalarFieldEnum["products_mediamanagerToproducts"] = "products_mediamanagerToproducts";
    MediamanagerScalarFieldEnum["tasks"] = "tasks";
    MediamanagerScalarFieldEnum["users"] = "users";
})(MediamanagerScalarFieldEnum = exports.MediamanagerScalarFieldEnum || (exports.MediamanagerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MediamanagerScalarFieldEnum, {
    name: "MediamanagerScalarFieldEnum",
    description: undefined,
});

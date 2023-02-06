"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileUpdateInput_1 = require("../../../inputs/Upload_fileUpdateInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let UpdateOneUpload_fileArgs = class UpdateOneUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileUpdateInput_1.Upload_fileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileUpdateInput_1.Upload_fileUpdateInput)
], UpdateOneUpload_fileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], UpdateOneUpload_fileArgs.prototype, "where", void 0);
UpdateOneUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUpload_fileArgs);
exports.UpdateOneUpload_fileArgs = UpdateOneUpload_fileArgs;

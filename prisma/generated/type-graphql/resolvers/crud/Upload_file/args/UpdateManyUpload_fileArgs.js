"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileUpdateManyMutationInput_1 = require("../../../inputs/Upload_fileUpdateManyMutationInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
let UpdateManyUpload_fileArgs = class UpdateManyUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileUpdateManyMutationInput_1.Upload_fileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileUpdateManyMutationInput_1.Upload_fileUpdateManyMutationInput)
], UpdateManyUpload_fileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], UpdateManyUpload_fileArgs.prototype, "where", void 0);
UpdateManyUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUpload_fileArgs);
exports.UpdateManyUpload_fileArgs = UpdateManyUpload_fileArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileUpdateInput_1 = require("../../../inputs/Upload_fileUpdateInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let UpdateUpload_fileArgs = class UpdateUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileUpdateInput_1.Upload_fileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileUpdateInput_1.Upload_fileUpdateInput)
], UpdateUpload_fileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], UpdateUpload_fileArgs.prototype, "where", void 0);
UpdateUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateUpload_fileArgs);
exports.UpdateUpload_fileArgs = UpdateUpload_fileArgs;

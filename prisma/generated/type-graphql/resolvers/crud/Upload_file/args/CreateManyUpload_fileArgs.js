"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileCreateManyInput_1 = require("../../../inputs/Upload_fileCreateManyInput");
let CreateManyUpload_fileArgs = class CreateManyUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileCreateManyInput_1.Upload_fileCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUpload_fileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUpload_fileArgs.prototype, "skipDuplicates", void 0);
CreateManyUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUpload_fileArgs);
exports.CreateManyUpload_fileArgs = CreateManyUpload_fileArgs;

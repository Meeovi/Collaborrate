"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphWhereUniqueInput = class Upload_file_morphWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphWhereUniqueInput.prototype, "id", void 0);
Upload_file_morphWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphWhereUniqueInput", {
        isAbstract: true
    })
], Upload_file_morphWhereUniqueInput);
exports.Upload_file_morphWhereUniqueInput = Upload_file_morphWhereUniqueInput;

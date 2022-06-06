"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_fileWhereUniqueInput = class Upload_fileWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileWhereUniqueInput.prototype, "id", void 0);
Upload_fileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_fileWhereUniqueInput", {
        isAbstract: true
    })
], Upload_fileWhereUniqueInput);
exports.Upload_fileWhereUniqueInput = Upload_fileWhereUniqueInput;

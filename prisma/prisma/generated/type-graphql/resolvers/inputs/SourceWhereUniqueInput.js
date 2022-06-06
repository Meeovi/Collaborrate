"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SourceWhereUniqueInput = class SourceWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SourceWhereUniqueInput.prototype, "id", void 0);
SourceWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SourceWhereUniqueInput", {
        isAbstract: true
    })
], SourceWhereUniqueInput);
exports.SourceWhereUniqueInput = SourceWhereUniqueInput;

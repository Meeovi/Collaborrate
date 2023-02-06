"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttributesWhereUniqueInput = class AttributesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AttributesWhereUniqueInput.prototype, "id", void 0);
AttributesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttributesWhereUniqueInput", {
        isAbstract: true
    })
], AttributesWhereUniqueInput);
exports.AttributesWhereUniqueInput = AttributesWhereUniqueInput;

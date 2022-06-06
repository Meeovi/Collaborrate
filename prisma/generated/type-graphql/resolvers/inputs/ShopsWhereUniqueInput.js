"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShopsWhereUniqueInput = class ShopsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ShopsWhereUniqueInput.prototype, "id", void 0);
ShopsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShopsWhereUniqueInput", {
        isAbstract: true
    })
], ShopsWhereUniqueInput);
exports.ShopsWhereUniqueInput = ShopsWhereUniqueInput;

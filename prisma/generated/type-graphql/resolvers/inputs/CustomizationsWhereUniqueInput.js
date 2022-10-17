"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomizationsWhereUniqueInput = class CustomizationsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomizationsWhereUniqueInput.prototype, "id", void 0);
CustomizationsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsWhereUniqueInput", {
        isAbstract: true
    })
], CustomizationsWhereUniqueInput);
exports.CustomizationsWhereUniqueInput = CustomizationsWhereUniqueInput;

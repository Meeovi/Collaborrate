"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomersWhereUniqueInput = class CustomersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersWhereUniqueInput.prototype, "id", void 0);
CustomersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersWhereUniqueInput", {
        isAbstract: true
    })
], CustomersWhereUniqueInput);
exports.CustomersWhereUniqueInput = CustomersWhereUniqueInput;

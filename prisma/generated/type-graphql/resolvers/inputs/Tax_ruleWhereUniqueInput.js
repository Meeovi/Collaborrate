"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_ruleWhereUniqueInput = class Tax_ruleWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleWhereUniqueInput.prototype, "id", void 0);
Tax_ruleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleWhereUniqueInput", {
        isAbstract: true
    })
], Tax_ruleWhereUniqueInput);
exports.Tax_ruleWhereUniqueInput = Tax_ruleWhereUniqueInput;

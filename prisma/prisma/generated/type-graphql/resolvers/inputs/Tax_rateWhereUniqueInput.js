"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_rateWhereUniqueInput = class Tax_rateWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateWhereUniqueInput.prototype, "id", void 0);
Tax_rateWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateWhereUniqueInput", {
        isAbstract: true
    })
], Tax_rateWhereUniqueInput);
exports.Tax_rateWhereUniqueInput = Tax_rateWhereUniqueInput;

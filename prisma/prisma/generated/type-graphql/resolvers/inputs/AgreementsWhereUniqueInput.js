"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AgreementsWhereUniqueInput = class AgreementsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AgreementsWhereUniqueInput.prototype, "id", void 0);
AgreementsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsWhereUniqueInput", {
        isAbstract: true
    })
], AgreementsWhereUniqueInput);
exports.AgreementsWhereUniqueInput = AgreementsWhereUniqueInput;

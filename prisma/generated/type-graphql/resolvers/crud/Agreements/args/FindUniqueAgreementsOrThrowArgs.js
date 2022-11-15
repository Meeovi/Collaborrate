"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAgreementsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsWhereUniqueInput_1 = require("../../../inputs/AgreementsWhereUniqueInput");
let FindUniqueAgreementsOrThrowArgs = class FindUniqueAgreementsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput)
], FindUniqueAgreementsOrThrowArgs.prototype, "where", void 0);
FindUniqueAgreementsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAgreementsOrThrowArgs);
exports.FindUniqueAgreementsOrThrowArgs = FindUniqueAgreementsOrThrowArgs;

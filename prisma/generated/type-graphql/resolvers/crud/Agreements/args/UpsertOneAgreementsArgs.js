"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsCreateInput_1 = require("../../../inputs/AgreementsCreateInput");
const AgreementsUpdateInput_1 = require("../../../inputs/AgreementsUpdateInput");
const AgreementsWhereUniqueInput_1 = require("../../../inputs/AgreementsWhereUniqueInput");
let UpsertOneAgreementsArgs = class UpsertOneAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput)
], UpsertOneAgreementsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCreateInput_1.AgreementsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsCreateInput_1.AgreementsCreateInput)
], UpsertOneAgreementsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsUpdateInput_1.AgreementsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsUpdateInput_1.AgreementsUpdateInput)
], UpsertOneAgreementsArgs.prototype, "update", void 0);
UpsertOneAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAgreementsArgs);
exports.UpsertOneAgreementsArgs = UpsertOneAgreementsArgs;

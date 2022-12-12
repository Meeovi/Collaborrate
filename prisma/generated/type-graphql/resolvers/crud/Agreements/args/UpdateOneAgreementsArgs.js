"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsUpdateInput_1 = require("../../../inputs/AgreementsUpdateInput");
const AgreementsWhereUniqueInput_1 = require("../../../inputs/AgreementsWhereUniqueInput");
let UpdateOneAgreementsArgs = class UpdateOneAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsUpdateInput_1.AgreementsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsUpdateInput_1.AgreementsUpdateInput)
], UpdateOneAgreementsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsWhereUniqueInput_1.AgreementsWhereUniqueInput)
], UpdateOneAgreementsArgs.prototype, "where", void 0);
UpdateOneAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAgreementsArgs);
exports.UpdateOneAgreementsArgs = UpdateOneAgreementsArgs;

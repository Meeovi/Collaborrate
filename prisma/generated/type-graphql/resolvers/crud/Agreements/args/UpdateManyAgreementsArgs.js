"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsUpdateManyMutationInput_1 = require("../../../inputs/AgreementsUpdateManyMutationInput");
const AgreementsWhereInput_1 = require("../../../inputs/AgreementsWhereInput");
let UpdateManyAgreementsArgs = class UpdateManyAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsUpdateManyMutationInput_1.AgreementsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsUpdateManyMutationInput_1.AgreementsUpdateManyMutationInput)
], UpdateManyAgreementsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereInput_1.AgreementsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsWhereInput_1.AgreementsWhereInput)
], UpdateManyAgreementsArgs.prototype, "where", void 0);
UpdateManyAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAgreementsArgs);
exports.UpdateManyAgreementsArgs = UpdateManyAgreementsArgs;

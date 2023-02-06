"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsWhereInput_1 = require("../../../inputs/AgreementsWhereInput");
let DeleteManyAgreementsArgs = class DeleteManyAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereInput_1.AgreementsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsWhereInput_1.AgreementsWhereInput)
], DeleteManyAgreementsArgs.prototype, "where", void 0);
DeleteManyAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAgreementsArgs);
exports.DeleteManyAgreementsArgs = DeleteManyAgreementsArgs;

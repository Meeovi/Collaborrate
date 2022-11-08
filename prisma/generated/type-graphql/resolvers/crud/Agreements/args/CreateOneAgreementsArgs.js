"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsCreateInput_1 = require("../../../inputs/AgreementsCreateInput");
let CreateOneAgreementsArgs = class CreateOneAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCreateInput_1.AgreementsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsCreateInput_1.AgreementsCreateInput)
], CreateOneAgreementsArgs.prototype, "data", void 0);
CreateOneAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAgreementsArgs);
exports.CreateOneAgreementsArgs = CreateOneAgreementsArgs;

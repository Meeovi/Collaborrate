"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsCreateInput_1 = require("../../../inputs/AgreementsCreateInput");
let CreateAgreementsArgs = class CreateAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCreateInput_1.AgreementsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AgreementsCreateInput_1.AgreementsCreateInput)
], CreateAgreementsArgs.prototype, "data", void 0);
CreateAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAgreementsArgs);
exports.CreateAgreementsArgs = CreateAgreementsArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsCreateManyInput_1 = require("../../../inputs/AgreementsCreateManyInput");
let CreateManyAgreementsArgs = class CreateManyAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsCreateManyInput_1.AgreementsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAgreementsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAgreementsArgs.prototype, "skipDuplicates", void 0);
CreateManyAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAgreementsArgs);
exports.CreateManyAgreementsArgs = CreateManyAgreementsArgs;

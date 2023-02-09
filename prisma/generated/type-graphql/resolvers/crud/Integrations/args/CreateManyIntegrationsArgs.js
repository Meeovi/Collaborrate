"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsCreateManyInput_1 = require("../../../inputs/IntegrationsCreateManyInput");
let CreateManyIntegrationsArgs = class CreateManyIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsCreateManyInput_1.IntegrationsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyIntegrationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyIntegrationsArgs.prototype, "skipDuplicates", void 0);
CreateManyIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyIntegrationsArgs);
exports.CreateManyIntegrationsArgs = CreateManyIntegrationsArgs;

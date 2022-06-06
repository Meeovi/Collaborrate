"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsCreateInput_1 = require("../../../inputs/IntegrationsCreateInput");
let CreateIntegrationsArgs = class CreateIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCreateInput_1.IntegrationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsCreateInput_1.IntegrationsCreateInput)
], CreateIntegrationsArgs.prototype, "data", void 0);
CreateIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateIntegrationsArgs);
exports.CreateIntegrationsArgs = CreateIntegrationsArgs;

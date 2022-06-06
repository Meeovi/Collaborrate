"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersCreateManyInput_1 = require("../../../inputs/ProvidersCreateManyInput");
let CreateManyProvidersArgs = class CreateManyProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProvidersCreateManyInput_1.ProvidersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProvidersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProvidersArgs.prototype, "skipDuplicates", void 0);
CreateManyProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProvidersArgs);
exports.CreateManyProvidersArgs = CreateManyProvidersArgs;

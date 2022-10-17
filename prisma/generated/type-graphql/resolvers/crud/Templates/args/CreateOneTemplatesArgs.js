"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesCreateInput_1 = require("../../../inputs/TemplatesCreateInput");
let CreateOneTemplatesArgs = class CreateOneTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesCreateInput_1.TemplatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesCreateInput_1.TemplatesCreateInput)
], CreateOneTemplatesArgs.prototype, "data", void 0);
CreateOneTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTemplatesArgs);
exports.CreateOneTemplatesArgs = CreateOneTemplatesArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationCreateInput_1 = require("../../../inputs/InternalizationCreateInput");
let CreateInternalizationArgs = class CreateInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCreateInput_1.InternalizationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationCreateInput_1.InternalizationCreateInput)
], CreateInternalizationArgs.prototype, "data", void 0);
CreateInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateInternalizationArgs);
exports.CreateInternalizationArgs = CreateInternalizationArgs;

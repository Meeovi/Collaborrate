"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationCreateInput_1 = require("../../../inputs/InternalizationCreateInput");
let CreateOneInternalizationArgs = class CreateOneInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCreateInput_1.InternalizationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationCreateInput_1.InternalizationCreateInput)
], CreateOneInternalizationArgs.prototype, "data", void 0);
CreateOneInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInternalizationArgs);
exports.CreateOneInternalizationArgs = CreateOneInternalizationArgs;

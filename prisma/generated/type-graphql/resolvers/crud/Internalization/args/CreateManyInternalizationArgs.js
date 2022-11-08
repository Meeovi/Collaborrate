"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationCreateManyInput_1 = require("../../../inputs/InternalizationCreateManyInput");
let CreateManyInternalizationArgs = class CreateManyInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationCreateManyInput_1.InternalizationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInternalizationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInternalizationArgs.prototype, "skipDuplicates", void 0);
CreateManyInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInternalizationArgs);
exports.CreateManyInternalizationArgs = CreateManyInternalizationArgs;

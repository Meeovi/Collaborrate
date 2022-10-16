"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftCreateManyInput_1 = require("../../../inputs/EndofshiftCreateManyInput");
let CreateManyEndofshiftArgs = class CreateManyEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftCreateManyInput_1.EndofshiftCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEndofshiftArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEndofshiftArgs.prototype, "skipDuplicates", void 0);
CreateManyEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEndofshiftArgs);
exports.CreateManyEndofshiftArgs = CreateManyEndofshiftArgs;

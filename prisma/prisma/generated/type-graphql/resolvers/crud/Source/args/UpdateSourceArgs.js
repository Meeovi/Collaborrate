"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceUpdateInput_1 = require("../../../inputs/SourceUpdateInput");
const SourceWhereUniqueInput_1 = require("../../../inputs/SourceWhereUniqueInput");
let UpdateSourceArgs = class UpdateSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceUpdateInput_1.SourceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceUpdateInput_1.SourceUpdateInput)
], UpdateSourceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereUniqueInput_1.SourceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceWhereUniqueInput_1.SourceWhereUniqueInput)
], UpdateSourceArgs.prototype, "where", void 0);
UpdateSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSourceArgs);
exports.UpdateSourceArgs = UpdateSourceArgs;

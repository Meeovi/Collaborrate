"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveCreateInput_1 = require("../../../inputs/DeepdiveCreateInput");
const DeepdiveUpdateInput_1 = require("../../../inputs/DeepdiveUpdateInput");
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let UpsertOneDeepdiveArgs = class UpsertOneDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], UpsertOneDeepdiveArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveCreateInput_1.DeepdiveCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveCreateInput_1.DeepdiveCreateInput)
], UpsertOneDeepdiveArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveUpdateInput_1.DeepdiveUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveUpdateInput_1.DeepdiveUpdateInput)
], UpsertOneDeepdiveArgs.prototype, "update", void 0);
UpsertOneDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDeepdiveArgs);
exports.UpsertOneDeepdiveArgs = UpsertOneDeepdiveArgs;

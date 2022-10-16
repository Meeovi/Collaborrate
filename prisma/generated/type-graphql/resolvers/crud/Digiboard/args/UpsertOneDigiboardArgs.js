"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardCreateInput_1 = require("../../../inputs/DigiboardCreateInput");
const DigiboardUpdateInput_1 = require("../../../inputs/DigiboardUpdateInput");
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
let UpsertOneDigiboardArgs = class UpsertOneDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], UpsertOneDigiboardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardCreateInput_1.DigiboardCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardCreateInput_1.DigiboardCreateInput)
], UpsertOneDigiboardArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardUpdateInput_1.DigiboardUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardUpdateInput_1.DigiboardUpdateInput)
], UpsertOneDigiboardArgs.prototype, "update", void 0);
UpsertOneDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDigiboardArgs);
exports.UpsertOneDigiboardArgs = UpsertOneDigiboardArgs;

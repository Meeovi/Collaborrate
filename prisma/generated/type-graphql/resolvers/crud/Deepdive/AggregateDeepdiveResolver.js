"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDeepdiveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDeepdiveArgs_1 = require("./args/AggregateDeepdiveArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const AggregateDeepdive_1 = require("../../outputs/AggregateDeepdive");
const helpers_1 = require("../../../helpers");
let AggregateDeepdiveResolver = class AggregateDeepdiveResolver {
    async aggregateDeepdive(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDeepdive_1.AggregateDeepdive, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDeepdiveArgs_1.AggregateDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDeepdiveResolver.prototype, "aggregateDeepdive", null);
AggregateDeepdiveResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], AggregateDeepdiveResolver);
exports.AggregateDeepdiveResolver = AggregateDeepdiveResolver;

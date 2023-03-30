"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMediamanagerArgs_1 = require("./args/AggregateMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const AggregateMediamanager_1 = require("../../outputs/AggregateMediamanager");
const helpers_1 = require("../../../helpers");
let AggregateMediamanagerResolver = class AggregateMediamanagerResolver {
    async aggregateMediamanager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMediamanager_1.AggregateMediamanager, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMediamanagerArgs_1.AggregateMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMediamanagerResolver.prototype, "aggregateMediamanager", null);
AggregateMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], AggregateMediamanagerResolver);
exports.AggregateMediamanagerResolver = AggregateMediamanagerResolver;
